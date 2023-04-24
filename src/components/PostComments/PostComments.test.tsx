import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar 2 comentários', () => {
        render(<PostComment/>);

        const botao = screen.getByTestId('btn-comment');
        const comentario = screen.getByTestId('txt-comment')

        fireEvent.change(comentario, {
            target: {
                value: 'Primeiro Comentário',
            }
        });
        fireEvent.click(botao);
    
        fireEvent.change(comentario, {
            target: {
                value: 'Segundo Comentário',
            }
        });
        fireEvent.click(botao);

        const resultado = screen.getAllByTestId('item-comment');
        expect(resultado).toHaveLength(2);
    });

});
