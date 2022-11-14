export interface IButton{
    variant: 'filled' | 'outlined' | 'empty' | 'disabled'
    action?: CallableFunction
    children?: any
    type?: 'button' | 'submit' | 'reset' 
}