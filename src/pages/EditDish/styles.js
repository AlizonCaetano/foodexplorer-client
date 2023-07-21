import styled from 'styled-components'

export const Container = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;

    .returnbtn {
        color: ${({theme})=> theme.COLORS.LIGHT_300};
        font-size: 1.6rem;

        svg {
            fill: ${({theme})=> theme.COLORS.LIGHT_300};
            height: 2.2rem;
            width: 2.2rem;
            margin: 0;
        }    
    }

    h2 {
        color: ${({theme})=> theme.COLORS.LIGHT_300};
        font-size: 3.2rem;
        font-weight: 400;
        line-height: 4.4rem;
    }

    p {
        display: flex;
        color: ${({theme})=> theme.COLORS.LIGHT_400};
        font-weight: 400;
        line-height: 100%;
        margin-block: 1.6rem;
    }

    label {
        display: flex;
    }

    .deleteButton{
        grid-area: dlt;
        background-color: ${({theme})=> theme.COLORS.DARK_800};
    }

    .ingredients { 
        .tags{
            gap: 20px;
            max-height: 18rem;
            justify-content: start;
            overflow-y: auto;
            padding: 1rem;
        }
    }
        
        /* GRID AREA */ 
    @media(min-width: 768px){
        

        form {
            display: grid;
            gap: 20px;
            grid-template-columns: repeat(10, 1fr);
            grid-auto-rows: minmax(100px, auto);
            grid-template-areas:
            "hd hd hd hd hd hd hd hd hd hd"
            "dimg dimg dimg dt dt dt dt ctg ctg ctg"
            "dimg dimg dimg igr igr igr igr igr prc prc"
            "dsc dsc dsc dsc dsc dsc dsc dsc dsc dsc"
            ". . . . . dlt dlt dlt slv slv"
            ;
            height: max-content;
            width: 100%;
        
        
            header {
                grid-area: hd;
            }

            .details {
                grid-area: dt;
                display: flex;
            }

            .dishImage {
                grid-area: dimg;

                > label {
                    display: flex;
                    padding: 1rem;

                    span{
                        font-size: 1rem;
                    }
                    
                    svg {
                        max-width: 1.3rem;
                        margin-left: 1rem;
                    }
                }
            }

            .dishCategory {
                grid-area: ctg;
            }

            .dishCategory select{
                padding: 0 1.4rem;
            }

            .ingredients {
                grid-area: igr;

                .tags{
                    gap: 20px;
                    max-height: 18rem;
                }
            }

            .price {
                grid-area: prc; 

                div {
                    width: 100%;
                    height: 5.6rem;
                }
            }

            .description {
                grid-area: dsc;
            }

            & > button {
                grid-area: slv;
                margin-right: 10px;
                width: 20%;
                justify-self: end ;
            } 
        } 
    }

    @media(min-width: 980px){
        form {
            .dishImage {
                > label {
                    span{
                        font-size: 1.3rem;
                    }
                    
                    svg {
                        max-width: 1.6rem;
                    }
                    }
                }
            }
    }
`

export const Image = styled.div`
    position: relative;
    margin: 0 3rem 3rem;
    min-width: 200px;
   
    
    > img {
        min-width: 200px;

        width: 100%;
        height: auto;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid ${({ theme }) => theme.COLORS.TOMATO_100};
    }
    
    > label {
        display: flex;

        align-items: center;
        justify-content: center;
        
        position: absolute;
        bottom: 0.7rem;
        right: 0.7rem;
        
        width: 4.8rem;
        height: 4.8rem;
        
        background-color: ${({ theme }) => theme.COLORS.TOMATO_300};
        border-radius: 50%;
        border: 3px solid ${({ theme }) => theme.COLORS.TOMATO_100};

        cursor: pointer;
        
        input {
            display: none;
        }
        
        svg {
            width: 2rem;
            height: 2rem;
            margin: auto;
        }

        div {
            background: none;
        }
    }
    
    > label:hover {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }
    `;

export const Form = styled.form`
    height: min-content;

    padding: 3.2rem;

    display: flex;
    flex-direction: column;
    

    gap: 3.2rem;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 4.5rem;
        text-align: start;
        
        margin: 2.4rem 0 0;
    }

    button:first-child {
        font-size: 1.6rem;
    }

    .header {
        justify-content: center;
        text-align: center;
    }

    > div p {
        margin-bottom: 0.8rem;
    }

    .dishCategory select {
        font-size: 1.6rem;
        font-weight: 400;
        height: 4.8rem;
        font-family: ${({theme})=> theme.FONTS.POPPINS};
        line-height: 2.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_600};
        
        width: 100%;
        padding: 1.6rem;

        border: none;
        border-radius: 8px;
        background: ${({ theme }) => theme.COLORS.DARK_900};
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        padding: 1.6rem;
        background: ${({ theme }) => theme.COLORS.DARK_900};
        border: none;
        border-radius: 8px;
        min-height: 5.6rem;
        justify-content: space-between;
    }

    .dishImage {
        display: flex;
        flex-direction: column;
        
        > label {
            display: flex;
            justify-content: center;
            margin-bottom: 1.4rem;

            padding: 1.5rem;
            height: 4.8rem;

            border-radius: 8px;

            font-family: 'Poppins', sans-serif;
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2.4rem;

            cursor: pointer;

            svg {
                filter: invert(.8);
                margin-right: 1rem;
            }

            div {
                background: none;
            }

        }
    }
`