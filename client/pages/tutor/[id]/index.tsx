import { Container, Overlay, PageWrapper } from "../../../styles/helpers";
import { Banner } from "./TutorID.style";
import Meta from "../../../components/Meta";
import { SingleTutorWrapper } from "./TutorID.style";
import Image from "next/image";
import { MdStar, MdStarBorder, MdEvent, MdChat } from "react-icons/md";
import { Description, Pill } from "../../../styles/helpers";
import {
    TutorTitle,
    TutorSubtitle,
} from "../../../components/TutorCard/TutorCard.style";
import { StickyContainer, Sticky } from "react-sticky";
import IconButton from "../../../components/IconButton";
import Breadcumb from "../../../components/Breadcumb";
import { tutorBreadcumb } from "../../../utils/breadcumbs";

export default function Tutor() {
    return (
        <PageWrapper pTop="110px">
            <Meta
                title={`Tutor - Nicolas Marqui`}
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <Banner>
                <Overlay border="37px" />
            </Banner>
            <Container>
                <StickyContainer>
                    <SingleTutorWrapper>
                        <div className="st__first">
                            <Image
                                src="/assets/student.jpg"
                                width={160}
                                height={160}
                                className="tutor__avatar"
                            />
                            <div className="first__rating">
                                <MdStar size={24} color="yellow" />
                                <MdStar size={24} color="yellow" />
                                <MdStar size={24} color="yellow" />
                                <MdStar size={24} color="yellow" />
                                <MdStarBorder size={24} />
                            </div>
                            <div className="first__type">
                                <Pill>Professor</Pill>
                                <Pill>Verificado</Pill>
                            </div>
                        </div>
                        <div className="st__second">
                            <div className="second__bread">
                                <Breadcumb
                                    color="#fff"
                                    data={tutorBreadcumb("Nicolas Marqui")}
                                />
                            </div>
                            <div className="second__info">
                                <TutorTitle>Walter White</TutorTitle>
                                <TutorSubtitle>
                                    Ensina <span>Javascript</span> e{" "}
                                    <span>algoritimos</span>
                                </TutorSubtitle>
                                <Description
                                    fontSize="14px"
                                    marginTop={14}
                                    size="70"
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quam beatae tenetur
                                    cupiditate fugiat in et repudiandae libero
                                    quis architecto. Illum delectus repellendus
                                    ex fugit consectetur illo, ipsa vero
                                    consequuntur non fugiat quos reiciendis
                                    ratione consequatur aspernatur aperiam eos
                                    error accusamus, qui commodi voluptatibus
                                    deleniti cumque vel sequi. Numquam, nisi?
                                    Debitis consequuntur, necessitatibus ut
                                    dolor a modi. Quod odit pariatur cum
                                    eligendi error quia quisquam fugiat eum
                                    veritatis earum, impedit nulla sequi
                                    consectetur dolor atque voluptatem illum!
                                    Expedita consectetur placeat beatae quam
                                    ipsa, vel architecto aliquid ratione ad
                                    totam officia omnis quibusdam neque
                                    temporibus incidunt deleniti. Sequi
                                    voluptate qui laborum! Officiis placeat,
                                    pariatur itaque adipisci excepturi cum, ut
                                    saepe molestiae, eaque praesentium possimus
                                    magni. Aliquam eveniet et cum natus facilis
                                    laboriosam cupiditate nesciunt laborum vel,
                                    ullam quas. Ipsum, animi quos corrupti ea
                                    nisi quas, ab numquam dicta maxime,
                                    molestias tenetur deleniti quam! Quas fuga
                                    explicabo possimus enim quo mollitia
                                    commodi, voluptatem tenetur laboriosam
                                    sequi, quaerat sint quasi? Quis eveniet
                                    numquam optio! Incidunt omnis facilis harum
                                    sint iure eos, veniam nihil velit,
                                    architecto et soluta neque, debitis officiis
                                    nisi voluptate asperiores nesciunt nulla
                                    adipisci. Quia culpa ab repellendus rem
                                    soluta, minus quis nemo nostrum blanditiis
                                    quasi velit ipsa numquam dolore amet
                                    perspiciatis accusantium. Accusamus suscipit
                                    consequatur vitae placeat ab inventore
                                    corporis in hic adipisci facere! Nemo,
                                    incidunt non. Nostrum, eos aperiam esse aut
                                    impedit voluptatum ex magnam illo beatae
                                    delectus, tempora dicta cum necessitatibus
                                    quibusdam iusto inventore blanditiis.
                                    Ducimus omnis quasi necessitatibus
                                    accusantium ratione soluta quam pariatur
                                    velit repudiandae sit, esse voluptatem
                                    praesentium perferendis tempora, delectus
                                    quas consequuntur error obcaecati quos rem
                                    quae aspernatur! Corporis nostrum vero
                                    quidem quia incidunt quasi excepturi nobis
                                    architecto, iste asperiores ipsa quos
                                    laborum delectus quis sint ut deleniti
                                    recusandae modi ducimus voluptatibus
                                    sapiente est dolorum culpa. Culpa obcaecati
                                    earum autem adipisci doloremque dignissimos
                                    distinctio quia. Est nostrum officia totam
                                    eos labore, itaque nisi animi fuga vitae?
                                    Libero dolores, eum facere odio asperiores
                                    fuga molestias fugiat explicabo ratione.
                                    Dolorum odit non natus optio. Dolore,
                                    officiis illo. Cupiditate ipsa excepturi
                                    magnam harum repellendus esse eum aliquam
                                    accusamus, magni, qui laboriosam, voluptate
                                    quos praesentium explicabo dolor! Quidem
                                    dolorum quae, eligendi suscipit porro error
                                    earum voluptas cumque cum deleniti optio
                                    numquam aperiam odit voluptatibus facilis
                                    beatae? Alias quae incidunt non impedit odio
                                    beatae molestiae, accusamus nam fugit error
                                    porro itaque quo amet sit quos quisquam
                                    commodi autem eaque, reiciendis sed magnam
                                    distinctio sapiente neque nulla? Possimus
                                    odio odit ut! Odit eos incidunt ex obcaecati
                                    animi explicabo. Non, optio magni qui
                                    quaerat voluptas molestias, doloremque
                                    cumque blanditiis, vero laboriosam nemo
                                    minima molestiae! Voluptatum expedita
                                    delectus, dolore placeat quo molestias quasi
                                    voluptate tempora atque, magnam tenetur.
                                    Dolorum voluptate exercitationem molestias
                                    enim eius deleniti aperiam, ratione
                                    explicabo fugit fugiat quo animi asperiores
                                    odio laboriosam quasi suscipit. Quod debitis
                                    voluptates dolor error mollitia
                                    necessitatibus obcaecati. Cupiditate, cum
                                    voluptatibus reprehenderit ratione hic sequi
                                    sit excepturi laudantium libero vero quam
                                    maxime iusto impedit minima soluta
                                    exercitationem dolorem dignissimos sunt quos
                                    molestias deleniti perferendis suscipit.
                                    Doloribus voluptatem quos minus rerum
                                    temporibus ex doloremque. Dolorum incidunt
                                    quia mollitia assumenda, tempore eum quidem
                                    nisi cupiditate non inventore neque ducimus
                                    tenetur? Atque labore rem laborum laboriosam
                                    repudiandae quae beatae recusandae quod
                                    omnis quia fugiat, dolorem sit. Eum
                                    quibusdam exercitationem dolore amet fuga at
                                    explicabo unde reprehenderit tempora,
                                    voluptas illum a nesciunt perferendis
                                    consectetur voluptatem porro perspiciatis.
                                    Hic et quisquam quis sunt dolore quam saepe
                                    ipsam repellat, repudiandae debitis
                                    perferendis magnam impedit qui provident?
                                    Ipsa consequuntur corrupti modi incidunt,
                                    atque praesentium ipsam omnis neque non cum
                                    porro quidem! Dolores pariatur enim labore
                                    cum qui ullam aliquid eveniet et, sint non,
                                    repellendus rerum eos modi debitis dolorem,
                                    exercitationem fugiat ipsa! Officiis,
                                    quidem.
                                </Description>
                            </div>
                        </div>
                        <div className="st__third">
                            <Sticky topOffset={-100}>
                                {({ style, isSticky }) => (
                                    <div
                                        className={`third__box ${
                                            isSticky ? "box__sticky" : ""
                                        }`}
                                        style={style}
                                    >
                                        <div className="sRow__prices">
                                            <h5>Preço por hora a partir de</h5>
                                            <p className="prices__value">
                                                R$8.00
                                            </p>

                                            <div className="prices__btn">
                                                <IconButton
                                                    icon={<MdEvent size={20} />}
                                                    text="AGENDAR"
                                                />
                                                <IconButton
                                                    icon={<MdChat size={20} />}
                                                    text="CONTATO"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Sticky>
                        </div>
                    </SingleTutorWrapper>
                </StickyContainer>
            </Container>
        </PageWrapper>
    );
}
