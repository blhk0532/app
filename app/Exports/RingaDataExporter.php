<?php

namespace App\Exports;

use App\Models\RingaData;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class RingaDataExporter implements FromCollection, WithHeadings, WithMapping
{
    protected array $columns = [];

    protected string $orderColumn = 'created_at';

    protected string $orderDirection = 'desc';

    public function __construct(array $columns = [], string $orderColumn = 'created_at', string $orderDirection = 'desc')
    {
        $this->columns = $columns;
        $this->orderColumn = $orderColumn;
        $this->orderDirection = $orderDirection;
    }

    public function collection()
    {
        $query = RingaData::query()
            ->orderBy($this->orderColumn, $this->orderDirection)
            ->limit(2000);

        return $query->get();
    }

    public function headings(): array
    {
        if (empty($this->columns)) {
            return array_values(RingaData::getExportColumns());
        }

        return array_column($this->columns, 'title');
    }

    public function map($row): array
    {
        if (empty($this->columns)) {
            $exportColumns = RingaData::getExportColumns();
            $result = [];
            foreach (array_keys($exportColumns) as $field) {
                $result[] = $this->getFieldValue($row, $field);
            }

            return $result;
        }

        $result = [];
        foreach ($this->columns as $column) {
            $result[] = $this->getFieldValue($row, $column['field']);
        }

        return $result;
    }

    protected function getFieldValue($row, string $field)
    {
        if (str_contains($field, '.')) {
            $parts = explode('.', $field);
            $value = $row;
            foreach ($parts as $part) {
                $value = $value->{$part} ?? null;
            }

            return $value;
        }

        $value = $row->{$field} ?? '';

        if (is_array($value)) {
            return json_encode($value);
        }

        return $value;
    }
}
