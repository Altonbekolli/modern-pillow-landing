import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from '../sections/hero/hero'
import MainLayout from '../layouts/main-layout/main-layout'
import Faq from '../sections/faq/faq'
import { useTheme } from '../hooks/useTheme'
import Contact from '../sections/contact/contact'
import Impressum from "../pages/legal/Impressum";
import Privacy from "../pages/legal/Privacy";
import Terms from "../pages/legal/Terms";


function ProductPage() { return <div style={{ padding: 40 }}>Produkt Seite</div> }

export default function App() {
    const { theme, setTheme } = useTheme()

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout theme={theme} setTheme={setTheme} />}>
                    <Route path="/" element={<Hero />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/contact" element={<Contact theme={theme} />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/impressum" element={<Impressum />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
