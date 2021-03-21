import { InfoCardWrapper } from "./InfoCard.style";

interface InfoCardProps {
    color?: string;
    number: number;
    text: string;
}

export default function InfoCard({ color, number, text }: InfoCardProps) {
    return (
        <InfoCardWrapper bgColor={color ? color : ""}>
            <h4 className="ic__number">{number}</h4>
            <h5 className="ic__text">{text}</h5>
        </InfoCardWrapper>
    );
}
