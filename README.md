# WebPage-Summarizer
A Chrome extension that utilizes ChatGPT to provide a summarized version of web articles, as well as useful options to facilitate content understanding.

# Features
- Easy and auto authorization with ChatGPT browser tab (no api-key required).
- Overview of page content without any text selection.
- Summarize in the original content language.
- Quick summary with stream response.
- Copy to clipboard.

# How it works
Currently, using the official OpenAI API is subject to a 3-month time limit.
In order to be able to use the same API on the browser side that ChatGPT itself uses, I used a reverse engineering trick and run extension requests in the background of a ChatGPT tab in the browser (so the extension requests will be placed in your account chats).

To authorize the extension to run, do the following:
1. On the page you want to summarize its content, click on the extension icon.
2. If you are not authorized, you must click on the `chat.openai.com` link to open a ChatGPT tab and pass the Cloudflare check.
3. When the authorization dialog is displayed, you can go back to the previous page and summarize the page content.
