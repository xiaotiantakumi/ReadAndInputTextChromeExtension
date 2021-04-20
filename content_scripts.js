window.onload = function() {
    // 対象要素
    const ele = document.querySelector("div.p-home_menu.pt-1 > div:nth-child(1)")
    // 値
    let copyValue = ele.innerHTML
    // 値【記事フィード】を設定
    document.querySelector("form.st-RenewalHeader_search > input").value = copyValue
}