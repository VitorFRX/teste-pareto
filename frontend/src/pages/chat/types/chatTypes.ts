

type ChatReqProps = {
    content: string,
    conversationId: string,
    createdAt: string,
    id_chat: string,
    input_tokens: string,
    model: string,
    output_tokens: string,
    role: string,
    stop_reason: string,
    stop_sequence: string,
    type: string,
};

export type ChatProps = {
    data: ChatReqProps[];
    isLoading: boolean;
};