
// ANCHOR --> IMPORTS ICONS
import { GoCrossReference } from "react-icons/go";
// END // ANCHOR --> IMPORTS ICONS

// ANCHOR --> IMPORTS STYLES
import { 
    ContainerMessage, 
    ContainerRightSide, 
    ErroMsg, 
    FormField, 
    HeaderRightSide, 
    MessageTyped, 
    TitleRightSide 
} from "./styles/rightSide.style";
// END STYLES

// ANCHOR --> IMPORTS TYPES
import { ChatProps } from "../../pages/chat/types/chatTypes";
// END TYPES

// ANCHOR --> IMPORTS REACT HOOK FORM
import { useForm, Controller } from 'react-hook-form';
// END REACT HOOK FORM

// ANCHOR --> IMPORTS COMPONENTS
import { InputText } from "../inputs/inputComp";
import { Input } from "../inputs";
// END COMPONENTS

// ANCHOR --> IMPORTS SERVICE
import api from "../../service/api";
import { Button } from "../@/components/ui/button";
// END SERVICE



export const RightSide = ({ data, isLoading }: ChatProps) => {

    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = async (message: unknown) => {
        try {
            const response = await api.post("api/new-message", message);
            return response.data;
    
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <>
            <ContainerRightSide>
                <HeaderRightSide>
                    <TitleRightSide>Teste Pareto - Integração Claude 3</TitleRightSide>
                    <GoCrossReference />
                </HeaderRightSide>

                <ContainerMessage>
                    { isLoading ?
                        "Carregando..."
                        :
                        data?.map((data) => {
                            return <MessageTyped key={data.id_chat}>{data.content}</MessageTyped>
                        })
                    }
                </ContainerMessage>

                <FormField onSubmit={handleSubmit(onSubmit)}>
                        <Controller 
                            name="mensagem" 
                            control={control} 
                            defaultValue="" 
                            rules={{ required: true }}
                            render={({ field }) => (
                                <InputText obrigatorio>
                                    <Input placeholder={"Mensagem"} {...field} />
                                </InputText>
                            )}
                        />
                        {errors.mensagem && <ErroMsg>Digite uma mensagem.</ErroMsg>}

                        <Button type="submit">Enviar</Button>
                </FormField>
            </ContainerRightSide>
        </>
    );
};