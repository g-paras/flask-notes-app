function deleteNode(nodeId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: nodeId }),
  }).then((res) => {
    window.location.href = "/";
  });
}
