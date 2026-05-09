import { Text } from "@mantine/core";
import { Link, useLocation, useMatch } from "react-router-dom";

interface CustomLinkProps {
    to: string,
    children: React.ReactNode
}

export const CustomLink = ({ to, children }: CustomLinkProps) => {
    const location = useLocation();

    const match = useMatch({
        path: to,
        end: true,
    })

    let isActive = Boolean(match)

    if (to.startsWith('/vacancies')) {
        isActive = location.pathname.startsWith('/vacancies')
    }

    return (
        <Link
        to={to}
        style={{
            position: 'relative',
            color: isActive ? "#0F0F10" : 'rgba(15, 15, 16, 0.5)',
            fontWeight: isActive ? 600 : 500,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
        }}>
            <Text size="xs">{children}</Text>

            {isActive && (
                <span 
                style={{
                    position: 'absolute',
                    right: -10,
                    bottom: 4,
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: "#4263EB",
                }}
                />
            )}
        </Link>
    )
}