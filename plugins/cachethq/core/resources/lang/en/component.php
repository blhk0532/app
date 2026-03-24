<?php

return [
    'resource_label' => 'Tekniker|Tekniker',
    'list' => [
        'headers' => [
            'name' => 'Name',
            'status' => 'Status',
            'order' => 'Order',
            'group' => 'Group',
            'enabled' => 'Enabled',
            'created_at' => 'Created at',
            'updated_at' => 'Updated at',
            'deleted_at' => 'Deleted at',
        ],
        'empty_state' => [
            'heading' => 'Tekniker',
            'description' => 'Tekniker represent the various parts of your system that can affect the status of your status page.',
        ],
    ],
    'last_updated' => ':timestamp',
    'view_details' => 'View Details',
    'form' => [
        'name_label' => 'Tekniker',
        'status_label' => 'Status',
        'description_label' => 'Description',
        'Tekniker_group_label' => 'Tekniker Group',
        'link_label' => 'Link',
        'link_helper' => 'Länk Tekniker.',
    ],
    'status' => [
        'operational' => 'Operational',
        'performance_issues' => 'Performance Issues',
        'partial_outage' => 'Partial Outage',
        'major_outage' => 'Major Outage',
        'under_maintenance' => 'Under maintenance',
        'unknown' => 'Unknown',
    ],

];
