module.exports = (content, author) => ({
  "blocks": [
    {
      "type": "image",
      "image_url": 'https://cataas.com/cat/gif?filter=sepia&color=orange&type=bg',
      "alt_text": "marg"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": `\n>${content}\n— ${author}`
      }
    }
  ]
})
