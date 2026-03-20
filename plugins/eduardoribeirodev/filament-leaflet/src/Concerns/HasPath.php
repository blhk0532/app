<?php

namespace EduardoRibeiroDev\FilamentLeaflet\Concerns;

use Closure;

trait HasPath
{
    use HasColor;
    use HasFillColor;

    protected ?int $weight = null;

    protected ?float $smoothFactor = null;

    protected ?array $dashArray = null;

    protected ?string $dashOffset = null;

    protected ?bool $stroke = true;

    protected ?string $lineCap = null;

    protected ?string $lineJoin = null;

    protected ?bool $fill = true;

    protected ?string $fillRule = null;

    protected ?bool $noClip = null;

    protected ?bool $bubblingMouseEvents = null;

    /**
     * Set the weight (thickness) of the shape's border.
     *
     * @return $this
     */
    public function weight(null|Closure|int $weight): static
    {
        $this->weight = $this->evaluate($weight);

        return $this;
    }

    /**
     * Get the weight (thickness) of the shape's border.
     */
    public function getWeight(): ?int
    {
        return $this->weight;
    }

    /**
     * Set the smoothing factor for the shape's path. Higher values mean better performance but worse appearance.
     *
     * @return $this
     */
    public function smoothFactor(null|Closure|float $smoothFactor): static
    {
        $this->smoothFactor = $this->evaluate($smoothFactor);

        return $this;
    }

    /**
     * Get the smoothing factor for the shape's path.
     */
    public function getSmoothFactor(): ?float
    {
        return $this->smoothFactor;
    }

    /**
     * Set the dash array for the shape's border.
     *
     * @param  Closure|null|int  $dashArray  An array of dash and gap lengths in pixels.
     * @return $this
     *
     * @example $shape->dashArray(5, 10); // 5px dash followed by 10px gap.
     * @example $shape->dashArray(5, 10, 2, 10); // 5px dash, 10px gap, 2px dash, 10px gap.
     */
    public function dashArray(null|Closure|int|string ...$dashArray): static
    {
        $this->dashArray = array_map(fn ($dash) => $this->evaluate($dash), $dashArray);

        return $this;
    }

    /**
     * Get the dash array for the shape's border.
     */
    public function getDashArray(): ?array
    {
        return $this->dashArray;
    }

    /**
     * Set the distance into the dash pattern to start the dash. Corresponds to the SVG `stroke-dashoffset` attribute.
     *
     * @return $this
     *
     * @example $shape->dashOffset('5');
     */
    public function dashOffset(null|Closure|string $dashOffset): static
    {
        $this->dashOffset = $this->evaluate($dashOffset);

        return $this;
    }

    /**
     * Get the distance into the dash pattern to start the dash.
     */
    public function getDashOffset(): ?string
    {
        return $this->dashOffset;
    }

    /**
     * Set whether to draw the border of the shape. Disable this to disable borders on polygons or circles.
     *
     * @return $this
     */
    public function stroke(null|Closure|bool $stroke = true): static
    {
        $this->stroke = $this->evaluate($stroke);

        return $this;
    }

    /**
     * Get whether the border of the shape is drawn.
     */
    public function getStroke(): ?bool
    {
        return $this->stroke;
    }

    /**
     * Set the shape to be used at the end of each sub-path stroke. Corresponds to the SVG `stroke-linecap` attribute.
     *
     * @param  Closure|null|string  $lineCap  Accepted values: 'butt', 'round', 'square'.
     * @return $this
     */
    public function lineCap(null|Closure|string $lineCap): static
    {
        $this->lineCap = $this->evaluate($lineCap);

        return $this;
    }

    /**
     * Get the shape used at the end of each sub-path stroke.
     */
    public function getLineCap(): ?string
    {
        return $this->lineCap;
    }

    /**
     * Set the shape to be used at the corners of the path's stroke. Corresponds to the SVG `stroke-linejoin` attribute.
     *
     * @param  Closure|null|string  $lineJoin  Accepted values: 'miter', 'round', 'bevel'.
     * @return $this
     */
    public function lineJoin(null|Closure|string $lineJoin): static
    {
        $this->lineJoin = $this->evaluate($lineJoin);

        return $this;
    }

    /**
     * Get the shape used at the corners of the path's stroke.
     */
    public function getLineJoin(): ?string
    {
        return $this->lineJoin;
    }

    /**
     * Set whether to fill the shape with color. Disable this to disable filling on polygons or circles.
     *
     * @return $this
     */
    public function fill(null|Closure|bool $fill = true): static
    {
        $this->fill = $this->evaluate($fill);

        return $this;
    }

    /**
     * Get whether the shape is filled with color.
     */
    public function getFill(): ?bool
    {
        return $this->fill;
    }

    /**
     * Set the fill rule that determines how the interior of the shape is defined.
     * Corresponds to the SVG `fill-rule` attribute.
     *
     * @param  Closure|null|string  $fillRule  Accepted values: 'nonzero', 'evenodd'.
     * @return $this
     */
    public function fillRule(null|Closure|string $fillRule): static
    {
        $this->fillRule = $this->evaluate($fillRule);

        return $this;
    }

    /**
     * Get the fill rule that determines how the interior of the shape is defined.
     */
    public function getFillRule(): ?string
    {
        return $this->fillRule;
    }

    /**
     * Disable or enable Leaflet's path clipping. Can be useful when rendering artifacts appear on edge cases.
     *
     * @return $this
     */
    public function noClip(null|Closure|bool $noClip = true): static
    {
        $this->noClip = $this->evaluate($noClip);

        return $this;
    }

    /**
     * Get whether Leaflet's path clipping is disabled.
     */
    public function getNoClip(): ?bool
    {
        return $this->noClip;
    }
}
