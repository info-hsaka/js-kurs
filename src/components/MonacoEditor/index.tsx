import React, { useRef, useState } from "react"
import Editor from "@monaco-editor/react"
import JsLogo from "../../../static/img/threadRunning.svg"
import styles from "./styles.module.css"

export default function MonacoEditor({
    language = "javascript",
    value = "",
    transitionText = "Gibt: ",
    showOutput = true,
    showRunButton = true,
}) {
    const editorRef = useRef(null)
    const [output, setOutput] = useState("")
    const [shouldFloat, setShouldFloat] = useState(false)
    const [showOutputWindow, setShowOutputWindow] = useState(showOutput)
    const [editorHeight, setEditorHeight] = useState(200)

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor

        // monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        //     noSemanticValidation: false,
        //     noSyntaxValidation: false,
        // })
        if (showOutput) runCode()
        editor.onDidContentSizeChange(() => {
            const contentHeight = editor.getContentHeight()
            setEditorHeight(contentHeight)
            setShouldFloat(contentHeight > 20)
        })
        setEditorHeight(editor.getContentHeight())
    }

    function runCode() {
        const code = editorRef.current.getValue()

        const logs = []
        const originalConsole = { ...console }

        ;["log", "info", "warn", "error"].forEach((method) => {
            console[method] = (...args) => {
                logs.push(args.map(String).join(" "))
                originalConsole[method](...args)
            }
        })

        try {
            const fn = new Function(code)
            fn()
        } catch (err) {
            logs.push("Error: " + err.message)
        }

        Object.assign(console, originalConsole)

        setOutput(logs.join("\n"))
        setShowOutputWindow(true)
    }

    return (
        <div>
            <div className={styles.editorContainer}>
                {showRunButton && (
                    <button
                        className={styles.runButtonFloating}
                        style={{ top: shouldFloat ? "8px" : "0px" }}
                        onClick={runCode}
                    >
                        <JsLogo width={12} height={12} />
                    </button>
                )}
                <Editor
                    height={editorHeight}
                    defaultLanguage={language}
                    defaultValue={value}
                    theme="vs-dark"
                    onMount={handleEditorDidMount}
                    options={{
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        fontSize: 14,
                    }}
                />
            </div>
            {showOutputWindow && (
                <div>
                    {transitionText}
                    <pre
                        style={{
                            marginTop: "10px",
                            background: "#272822",
                            color: "rgb(248, 248, 242)",
                            padding: "1rem",
                            borderRadius: 6,
                            minHeight: "2vh",
                        }}
                    >
                        {output}
                    </pre>
                </div>
            )}
        </div>
    )
}
