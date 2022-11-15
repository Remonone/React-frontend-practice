export interface IButton{
    variant: 'filled' | 'outlined' | 'empty' | 'disabled'
    action?: CallableFunction
    children?: any
    type?: 'button' | 'submit' | 'reset' 
}

export interface IInput{
    label?: string
    type?: 'date' | 'text' | 'number'
}