export default {
    "type": "object",
    "name": "header",
    "title": "Header Configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Header Title",
            "description": "The title displayed in the header if logo image not specified",
            "validation": null
        },
        {
            "type": "image",
            "name": "logo",
            "title": "Logo",
            "description": "The logo image displayed in the header",
            "validation": null
        },
        {
            "type": "string",
            "name": "logo_alt",
            "title": "Logo Alt Text",
            "description": "The alt text of the logo image",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "has_nav",
            "title": "Enable Navigation Menu",
            "description": "Display the navigation menu bar in the header",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "array",
            "name": "nav_links",
            "title": "Navigation Menu Links",
            "description": "List of navigation links in header",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}