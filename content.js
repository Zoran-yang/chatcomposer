
async function addPastePromptButton() {
  const conversationField = document.querySelector('textarea')
  const Buttons = document.querySelectorAll('button')
  const submitButton = Buttons[Buttons.length-1]
  if (!conversationField) {
    return
  }

  const pastePrompt = async () => {
    const prompt = await navigator.clipboard.readText()
    conversationField.value = prompt
    conversationField.dispatchEvent(new InputEvent('input', { bubbles: true }))
    submitButton.click()
  }
  await pastePrompt()
}

setTimeout(()=>addPastePromptButton(), 1000)
