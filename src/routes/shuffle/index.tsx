import { useShuffle } from "@/features/shuffle/hooks/useShuffle"
import { useClipboard } from "@/hooks/useClipboard"

export default function Shuffle() {
  const { input, urlForCopy, result, handleChangeInput, shuffle } = useShuffle()
  const { hasCopied: hasCopiedUrlForCopy, onCopy: onCopyUrlForCopy } =
    useClipboard(urlForCopy)
  const { hasCopied: hasCopiedResult, onCopy: onCopyResult } =
    useClipboard(result)

  return (
    <div className="space-y-4">
      <h1 className="text-main">Shuffle</h1>
      <div className="border-main p-4 border-2 rounded space-y-2">
        <h2 className="text-main">説明書</h2>
        <ul className="list-disc list-inside ml-2">
          <li>
            入力欄にシャッフルしたい文字列を改行区切りで入力して実行ボタンを押してください
          </li>
          <li>
            <code>?q=hoge-huga</code>&nbsp;
            のようなハイフン区切りのクエリパラメーター付きでURLを開くと初期値を設定できます
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="space-y-2">
          <label htmlFor="input" className="font-bold text-main">
            入力
          </label>
          <br />
          <textarea
            id="input"
            value={input}
            onChange={handleChangeInput}
            rows={10}
            autoFocus
            className="w-80 p-4"
          />
        </div>
        <button
          onClick={() => shuffle(input)}
          className="bg-main font-bold text-white px-4 py-2 rounded-full hover:opacity-80"
        >
          {result ? "再実行" : "実行"}
        </button>
        <div className="text-right space-y-2">
          <label htmlFor="result" className="font-bold text-main">
            結果
          </label>
          <br />
          <textarea
            id="result"
            value={result}
            rows={10}
            readOnly
            className="w-80 p-4"
          />
        </div>
      </div>
      <div className="flex justify-between">
        {urlForCopy && (
          <button
            onClick={onCopyUrlForCopy}
            className="text-main border-b border-main hover:opacity-80"
          >
            {hasCopiedUrlForCopy
              ? "コピーしました！"
              : "この入力を初期値とするURLをコピー"}
          </button>
        )}
        <br />
        {result && (
          <button
            onClick={onCopyResult}
            className="text-main border-b border-main hover:opacity-80"
          >
            {hasCopiedResult ? "コピーしました！" : "この結果をコピー"}
          </button>
        )}
      </div>
    </div>
  )
}
