<?php

return [
    'resource_label' => 'Collection|Collections',
    'incident_count' => ':count Incident|:count Incidents',
    'visibility' => [
        'expanded' => 'Always Expanded',
        'collapsed' => 'Always Collapsed',
        'collapsed_unless_incident' => 'Collapsed Unless Ongoing',
    ],
    'list' => [
        'headers' => [
            'name' => 'Name',
            'visible' => 'Visible',
            'collapsed' => 'Collapsed',
            'created_at' => 'Created at',
            'updated_at' => 'Updated at',
        ],
        'empty_state' => [
            'heading' => 'Collections',
            'description' => 'Collections related components together.',
        ],
    ],
    'form' => [
        'name_label' => 'Name',
        'visible_label' => 'Visible',
        'collapsed_label' => 'Collapsed',
    ],
];
