import styled from "styled-components";
import { Container } from "../styles/helpers";

const Title = styled.h2`
    font-size: 50px;
    font-family: ${(props) => props.theme.fonts.nunito};
`;

export default function Home() {
    return (
        <Container>
            <Title>Hello World</Title>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Minima, ut culpa? Fugit dolore quisquam enim, ipsum nesciunt rem
                provident! Aliquam facere eaque culpa nemo unde eveniet iste
                labore vero vitae quaerat ipsam tempore nobis architecto
                tempora, quas assumenda quasi veritatis ipsa. Alias, tempora
                atque obcaecati sint quo nihil cupiditate aperiam quaerat.
                Eveniet explicabo aperiam temporibus at error neque, laboriosam
                mollitia alias excepturi quod. Debitis nisi perspiciatis optio
                molestias et, fugit error vero, ratione deserunt delectus
                asperiores! Repellat ab, suscipit repudiandae, corrupti
                dignissimos architecto nemo, consequatur similique inventore
                reprehenderit ad! Reiciendis delectus eius omnis officia commodi
                ex quisquam quia. Assumenda, similique?
            </p>
        </Container>
    );
}
