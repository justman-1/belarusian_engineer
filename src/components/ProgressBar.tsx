interface PropsType {
  progress: number
}

export default function ProgressBar(props: PropsType) {
  return (
    <div
      style={{
        margin: "2em 0%",
        height: "1em",
        width: "100%",
        background: "linear-gradient(to right, #71c4f6, #4735ff)",
        borderRadius: "0.2rem",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <div
        style={{
          transition: "all 0.3s ease",
          height: "100%",
          width: Math.max(0.1, Math.min(props.progress, 100)) + "%",
        }}
      ></div>
      <div
        style={{
          transition: "all 0.3s ease",
          width: 100 - Math.max(0, Math.min(props.progress, 99.9)) + "%",
          backgroundColor: "#f1f1f1",
          height: "100%",
        }}
      ></div>
    </div>
  )
}
