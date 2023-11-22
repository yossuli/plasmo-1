// content.ts

// HTML要素の取得
const htmlElement = document.getElementsByTagName("html")[0]

// contextmenu イベントのリスナーを設定
htmlElement.addEventListener("contextmenu", (e) => {
  console.log("Custom Context Menu")

  // デフォルトの右クリックメニューを無効化
  e.preventDefault()

  // カスタムコンテキストメニューを表示
  const customContextMenu = document.createElement("div")
  customContextMenu.id = "customContextMenu"
  customContextMenu.style.position = "absolute"
  customContextMenu.style.width = "50px"
  customContextMenu.style.height = "50px"
  customContextMenu.style.backgroundColor = "red"
  customContextMenu.style.border = "2px solid #fff"
  customContextMenu.style.zIndex = "9999"
  customContextMenu.style.left = e.clientX + "px"
  customContextMenu.style.top = e.clientY + "px"

  document.body.appendChild(customContextMenu)

  // カスタムコンテキストメニューのクリックイベント
  customContextMenu.addEventListener("click", () => {
    // カスタムコンテキストメニューを非表示にする
    customContextMenu.style.display = "none"
  })

  return false
})
