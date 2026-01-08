export default function ShellMessenger() {
  const postMessageToShell = () => {
    window.parent.postMessage(
      { hi: "hello" },
      "*" // OK for first test only
    );
  };

  return (
    <button onClick={postMessageToShell}>
      Send message to shell
    </button>
  );
}