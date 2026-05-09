import { Card, Container, Text, Title } from "@mantine/core";

export const AboutPage = () => {
    return (
        <div style={{ backgroundColor: "#F1F3F5", minHeight: '100vh' }}>
            <Container size="md" py={32}>
                <Card
                radius="lg"
                p="lg"
                style={{
                    backgroundColor: "#FFFFFF",
                    border: '1px solid rgba(15, 15, 16, 0.1)',
                }}>
                    <Title order={2} mb="md">
                        Никита Румянцев
                    </Title>

                    <Text size="md" lh={1.6}>
                        Привет! Я - Frontend-разработчик. Пишу приложения на React + TypeScript + Redux Toolkit.
                    </Text>
                </Card>
            </Container>
        </div>
    )
}