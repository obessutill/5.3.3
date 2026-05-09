import { Container, Group, Text } from "@mantine/core";
import { useMatch } from "react-router-dom";
import hhIcon from '../assets/hh.svg';
import userIcon from '../assets/user-circle.svg';
import { CustomLink } from "./CustomLink";

export const Header = () => {
    const aboutMatch = useMatch('/about')

    return (
        <header
        style={{backgroundColor: '#ffffff',
            borderBottom: '1px solid rgba(15, 15, 16, 0.1)',
        }}
        >
            <Container
            size="lg"
            h={64}
            style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
            }}
            >
                <Group gap={8}>
                    <img src={hhIcon} alt="Логотип" width={24} height={24} />
                    <Text fw={700} size="sm" c="#0F0F10">
                        .FrontEnd
                    </Text>
                </Group>

                <Group
                gap={28}
                style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
                >
                    <CustomLink to='/vacancies/moscow'>Вакансии FE</CustomLink>

                    <CustomLink to='/about'>
                        <Group gap={6}>
                            <img src={userIcon} 
                            alt="Пользователь"
                            width={14}
                            height={14}
                            style={{
                                opacity: aboutMatch ? 1 : 0.5,
                            }} 
                            />
                            <span>Обо мне</span>
                        </Group>
                    </CustomLink>
                </Group>
            </Container>
        </header>
    );
};