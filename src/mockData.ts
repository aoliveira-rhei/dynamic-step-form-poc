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
  "childrenDisplayType": "badge_list",
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
      "childrenDisplayType": "badge_list",
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
      "childrenDisplayType": "select",
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
  "childrenDisplayType": "badge_list",
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
      "hasChildren": true,
      "childrenDisplayType": "grouped_select"
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
      "hasChildren": true,
      "childrenDisplayType": "grouped_select"
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
  "default_value": {
    "id": "yt_avatar",
    "displayKey": "label.youtube_avatar",
    "displayValue": "YouTube Avatar",
    "icon": "youtube",
    "component": "select_item",
    "uiGroup": "avatar_styles",
    "tier": null,
    "children": null,
    "path": "/image_engine/social_media/yt_avatar",
    "hasChildren": true,
    "childrenDisplayType": "badge_list"
  },
  "hasChildren": true,
  "childrenCount": 3,
  "childrenDisplayType": "grouped_select",
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
      "hasChildren": true,
      "childrenDisplayType": "badge_list"
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
      "hasChildren": true,
      "childrenDisplayType": "badge_list"
    },
    {
      "id": "linkedin_avatar",
      "displayKey": "label.linkedin_avatar",
      "displayValue": "LinkedIn Avatar",
      "icon": "linkedin",
      "component": "select_item",
      "uiGroup": "avatar_styles",
      "tier": null,
      "isDefault": null,
      "children": null,
      "path": "/image_engine/social_media/linkedin_avatar",
      "hasChildren": true,
      "childrenDisplayType": "badge_list"
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
  "childrenDisplayType": "badge_list",
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
      "hasChildren": true,
      "childrenDisplayType": "select"
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
  "childrenDisplayType": "select",
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

export {
  rootResponse,
  imageEngineResponse,
  formatPickerResponse,
  youtubeAvatarResponse,
  youtubeAvatarStyleResponse
};
