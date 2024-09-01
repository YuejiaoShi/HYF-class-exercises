function ToggleContent({ show, content }) {
  return <> {show && <div>{content}</div>}</>;
}

export default ToggleContent;
