//event source is an interface used to receive push notifications from server side events. It allows a persistent one way connection where the server can send events to the client. It needs the path to the live event

const eventSource = new EventSource()