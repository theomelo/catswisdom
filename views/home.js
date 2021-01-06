module.exports = {
  "type": "home",
  "blocks": [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": "Click on this button to receive a new wisdom"
      }
    },
    {
      "type": "actions",
      "elements": [
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Please, enlighten me"
          },
          "value": "new_wisdom",
          "action_id": "new_wisdom",
        }
      ]
    },
    {
      "type": "divider"
    },
    {
      "type": "image",
      "image_url": "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=363&q=80",
      "alt_text": "inspiration"
    }
  ]
}
