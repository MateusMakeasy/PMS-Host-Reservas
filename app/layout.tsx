import '../css/application-e92188508dfc62cc789f81c55db5dee201878eb236295c0f19bc684b2dcb8353.css';

export const metadata = {
    title: "PMS Hospedin",
    description: "Sistema de Gestão para Hotel, Pousada e Hostel",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i%7COpen+Sans:300,300i,400,400i,600,600i,700,700i" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
            </head>
            <body>{children}</body>
        </html>
    );
}
