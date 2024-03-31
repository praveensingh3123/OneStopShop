import styled from 'styled-components';

const Contact = () => {
    return (
        <Wrapper className='contact-wrapper'>
            <h1 className='common-heading'>Contact Page</h1>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.6256667743014!2d-71.10797402386517!3d42.35050363570517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f063e53817%3A0x2b346e00e0a3bec8!2sBoston%20University!5e0!3m2!1sen!2sus!4v1711745308957!5m2!1sen!2sus"
                width='100%'
                height='400'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerpolicy="no-referrer-when-downgrade">

            </iframe>

            <div className='container'>
                <div className='contact-form'>
                    <form action='https://formspree.io/f/xnqylele' method='post' className='contact-inputs'>
                        <input type='text' name='Username' placeholder='username' required autoComplete='off' />
                        <input type='email' name='Email' placeholder='Email' required autoComplete='off' />
                        <textarea
                            type='text'
                            name='Message'
                            cols='30'
                            rows='10'
                            placeholder='Enter your message'
                            required
                            autoComplete='off'
                        />
                        <input type='submit' value='send' />
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 12rem 0 5rem 0;
    text-align: center;

    .container {
        margin-top: 6rem;

        .contact-form {
            max-width: 50rem;
            margin: auto;

            .contact-inputs {
                display: flex;
                flex-direction: column;
                gap: 3rem;

                input[type='submit'] {
                    cursor: pointer;
                    transition: all 0.2s;

                    &:hover {
                        background-color: ${({ theme }) => theme.colors.white};
                        border: 1px solid ${({ theme }) => theme.colors.btn};
                        color: ${({ theme }) => theme.colors.btn};
                        transform: scale(0.9);
                    }
                }
            }
        }
    }
`;

export default Contact;
