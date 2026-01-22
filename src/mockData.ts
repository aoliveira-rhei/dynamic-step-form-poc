const rootResponse = {
  "id": "root",
  "path": "/",
  "icon": null,
  "component": "root",
  "uiGroup": null,
  "tier": null,
  "isDefault": null,
  "hasChildren": true,
  "childrenCount": 2,
  "children": [
    {
      "id": "image_engine",
      "path": "/image_engine",
      "label": "Image Engine",
      "icon": "image",
      "component": "badge",
      "uiGroup": null,
      "tier": null,
      "isDefault": null,
      "hasChildren": true,
      "childrenCount": 5,
      "children": null
    },
    {
      "id": "brainstorming",
      "path": "/brainstorming",
      "label": "Brainstorming Engine",
      "icon": "lightbulb",
      "component": "badge",
      "uiGroup": null,
      "tier": null,
      "isDefault": null,
      "hasChildren": true,
      "childrenCount": 1,
      "children": null
    }
  ]
} as const;

const imageEngineResponse = {
  "id": "image_engine",
  "path": "/image_engine",
  "displayKey": "label.image_engine",
  "displayValue": "Image Engine",
  "icon": "image",
  "component": "badge",
  "uiGroup": null,
  "tier": null,
  "isDefault": null,
  "hasChildren": true,
  "childrenCount": 2,
  "children": [
    {
      "id": "format_picker",
      "label": "Format Picker",
      "icon": "format-picker",
      "component": "badge",
      "uiGroup": "Platforms",
      "tier": null,
      "isDefault": null,
      "children": null,
      "path": "/image_engine/format_picker",
      "hasChildren": true
    },
    {
      "id": "size_picker",
      "label": "Size Picker",
      "icon": "size-picker",
      "component": "badge",
      "uiGroup": "Platforms",
      "tier": null,
      "isDefault": null,
      "children": null,
      "path": "/image_engine/size",
      "hasChildren": true
    }
  ]
} as const;

// const brainstormingResponse = {
//   "id": "brainstorming",
//   "path": "/brainstorming",
//   "displayKey": "label.brainstorming",
//   "displayValue": "Brainstorming Engine",
//   "icon": "lightbulb",
//   "component": "badge",
//   "uiGroup": null,
//   "tier": null,
//   "isDefault": null,
//   "hasChildren": true,
//   "childrenCount": 1,
//   "childrenDisplayType": "select",
//   "children": [
//     {
//       "id": "brainstorming",
//       "label": "Brainstorming",
//       "icon": "lightbulb",
//       "component": "select_item",
//       "uiGroup": "Creative Tools",
//       "tier": null,
//       "isDefault": null,
//       "children": null,
//       "path": "/brainstorming/brainstorming",
//       "hasChildren": false
//     }
//   ]
// } as const;


const formatPickerResponse = {
  "id": "format_picker",
  "path": "/image_engine/format_picker",
  "displayKey": "label.format_picker",
  "displayValue": "Format Picker",
  "icon": "format-picker",
  "component": "badge",
  "uiGroup": null,
  "tier": null,
  "hasChildren": true,
  "childrenCount": 3,
  "children": [
    {
      "id": "yt_avatar",
      "displayKey": "label.youtube_avatar",
      "displayValue": "YouTube Avatar",
      "icon": "youtube",
      "component": "select_item",
      "uiGroup": "avatar_styles",
      "tier": null,
      "isDefault": null,
      "children": null,
      "path": "/image_engine/social_media/yt_avatar",
      "hasChildren": true
    },
    {
      "id": "insta_avatar",
      "displayKey": "label.instagram_avatar",
      "displayValue": "Instagram Avatar",
      "icon": "instagram",
      "component": "select_item",
      "uiGroup": "avatar_styles",
      "tier": null,
      "isDefault": null,
      "children": null,
      "path": "/image_engine/social_media/insta_avatar",
      "hasChildren": true
    },
    {
      "id": "linkedin_profile",
      "displayKey": "label.linkedin_avatar",
      "displayValue": "LinkedIn Profile",
      "icon": "linkedin",
      "component": "select_item",
      "uiGroup": "profile_styles",
      "tier": null,
      "isDefault": null,
      "children": null,
      "path": "/image_engine/social_media/linkedin_profile",
      "hasChildren": true
    }
  ]
} as const;

const youtubeAvatarResponse = {
  "id": "youtube_avatar",
  "path": "/image_engine/format_picker/youtube_avatar",
  "displayKey": "label.youtube_avatar",
  "displayValue": "YouTube Avatar",
  "icon": "youtube",
  "component": "select_item",
  "uiGroup": null,
  "tier": null,
  "isDefault": null,
  "hasChildren": true,
  "children": [
    {
      "id": "youtube_avatar_style",
      "displayKey": "label.youtube_avatar_style",
      "displayValue": "YouTube Avatar Style",
      "icon": "style_icon",
      "component": "badge",
      "uiGroup": null,
      "tier": null,
      "isDefault": null,
      "children": null,
      "path": "/image_engine/format_picker/youtube_avatar/youtube_avatar_style",
      "hasChildren": true
    }
  ]
} as const;


const youtubeAvatarStyleResponse = {
  "id": "youtube_avatar_style",
  "path": "/image_engine/format_picker/youtube_avatar/youtube_avatar_style",
  "displayKey": "label.youtube_avatar_style",
  "displayValue": "YouTube Avatar Style",
  "icon": "style_icon",
  "component": "badge",
  "uiGroup": null,
  "tier": null,
  "hasChildren": true,
  "childrenCount": 1,
  "children": [
    {
      "id": "youtube_avatar_style_1",
      "displayKey": "label.youtube_avatar_style_1",
      "displayValue": "YouTube Avatar Style 1",
      "icon": "style_icon_1",
      "component": "select_item",
      "uiGroup": null,
      "tier": null,
      "isDefault": null,
      "children": null,
      "path": "/image_engine/format_picker/youtube_avatar/youtube_avatar_style/youtube_avatar_style_1",
      "hasChildren": false
    }
  ]
} as const;

const shortcustResponse = {
  "shortcuts": [
    {
      "id": "create_youtube_avatar",
      "label": "Create YouTube Avatar",
      "description": "Quick setup for creating a YouTube channel avatar with optimal settings",
      "icon": "https://assets.example.com/icons/youtube.svg",
      "agent": "milo",
      "category": {
        "label": "Image Engine",
        "icon": "https://tree-poc-icons.s3.us-east-1.amazonaws.com/icons/image.svg"
      },
      "tree": null
    },
    {
      "id": "create_instagram_avatar",
      "label": "Create Instagram Avatar",
      "description": "Quick setup for creating an Instagram profile picture with vibrant style",
      "icon": "https://assets.example.com/icons/instagram.svg",
      "agent": "milo",
      "category": {
        "label": "Image Engine",
        "icon": "https://tree-poc-icons.s3.us-east-1.amazonaws.com/icons/image.svg"
      },
      "tree": null
    },
    {
      "id": "create_linkedin_avatar",
      "label": "Create LinkedIn Avatar",
      "description": "Quick setup for creating a professional LinkedIn profile picture",
      "icon": "https://assets.example.com/icons/linkedin.svg",
      "agent": "milo",
      "category": {
        "label": "Image Engine",
        "icon": "https://tree-poc-icons.s3.us-east-1.amazonaws.com/icons/image.svg"
      },
      "tree": null
    }
  ],
} as const;

const youtubeAvatarShortcutResponse = {
  "id": "create_youtube_avatar",
  "label": "Create YouTube Avatar",
  "description": "Quick setup for creating a YouTube channel avatar with optimal settings",
  "icon": "https://assets.example.com/icons/youtube.svg",
  "agent": "milo",
  "category": {
    "label": "Image Engine",
    "icon": "https://tree-poc-icons.s3.us-east-1.amazonaws.com/icons/image.svg"
  },
  "tree": {
    "id": "image_engine",
    "path": "/image_engine",
    "label": "Image Engine",
    "displayKey": "label.image_engine",
    "displayValue": "Image Engine",
    "icon": "image",
    "component": "badge",
    "uiGroup": null,
    "tier": null,
    "isDefault": null,
    "hasChildren": true,
    "children": [
      {
        "id": "format_picker",
        "path": "/image_engine/format_picker",
        "label": "Format Picker",
        "displayKey": "label.format_picker",
        "displayValue": "Format Picker",
        "icon": "format-picker",
        "component": "badge",
        "uiGroup": null,
        "tier": null,
        "isDefault": null,
        "hasChildren": true,
        "children": [
          {
            "id": "yt_avatar",
            "path": "/image_engine/social_media/yt_avatar",
            "label": "YouTube Avatar",
            "displayKey": "label.youtube_avatar",
            "displayValue": "YouTube Avatar",
            "icon": "youtube",
            "component": "select_item",
            "uiGroup": "avatar_styles",
            "tier": null,
            "isDefault": null,
            "hasChildren": true,
            "children": [
              {
                "id": "youtube_avatar_style",
                "path": "/image_engine/format_picker/youtube_avatar/youtube_avatar_style",
                "label": "YouTube Avatar Style",
                "displayKey": "label.youtube_avatar_style",
                "displayValue": "YouTube Avatar Style",
                "icon": "style_icon",
                "component": "badge",
                "uiGroup": null,
                "tier": null,
                "isDefault": null,
                "hasChildren": true,
                "children": [
                  {
                    "id": "youtube_avatar_style_1",
                    "path": "/image_engine/format_picker/youtube_avatar/youtube_avatar_style/youtube_avatar_style_1",
                    "label": "YouTube Avatar Style 1",
                    "displayKey": "label.youtube_avatar_style_1",
                    "displayValue": "YouTube Avatar Style 1",
                    "icon": "style_icon_1",
                    "component": "select_item",
                    "uiGroup": null,
                    "tier": null,
                    "isDefault": null,
                    "hasChildren": false,
                    "children": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
} as const;

export {
  rootResponse,
  shortcustResponse,
  imageEngineResponse,
  formatPickerResponse,
  youtubeAvatarResponse,
  youtubeAvatarStyleResponse,
  youtubeAvatarShortcutResponse
};
