import style from "./index.module.css"
import mainStyle from "../../../src/style/index.module.css"
import AuthButton from "../../components/ui/AuthButton/AuthButton"
import { SkipButton } from "../../components/ui/AuthButton/AuthButton";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Country {
    name: string;
    code: string;
}

interface City {
    name: string;
}

export default function CountryCity() {
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [cities, setCities] = useState<City[]>([]);
    const [countries, setCountries] = useState<Country[]>([]);
    const [btn, setBtn] = useState<boolean>(true);
    const [Skip, setSkip] = useState<boolean>(true);
    const navigate = useNavigate()
    const ProfilePhoto = () => {
        setBtn(false)
        return navigate("/onboard/profilePhoto")
    }
    const skip = () => {
        setSkip(false)
        const out = setInterval(() => {
            setSkip(true)
            return navigate("/onboard/profilePhoto")
            clearInterval(out)
        }, 3000)
    }

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((response) => {
                const countryList = response.data.map((country: { name: { common: string }; cca2: string }) => ({
                    name: country.name.common,
                    code: country.cca2,
                }));
                setCountries(countryList.sort((a: Country, b: Country) => a.name.localeCompare(b.name)));
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            axios
                .post("https://countriesnow.space/api/v0.1/countries/cities", {
                    country: selectedCountry,
                })
                .then((response) => {
                    if (response.data.error || !response.data.data) {
                        setCities([]);
                    } else {
                        setCities(response.data.data.map((city: string) => ({ name: city })));
                    }
                })
                .catch((error) => {
                    console.error(error);
                    setCities([]);
                });
        } else {
            setCities([]);
        }
    }, [selectedCountry]);

    return (
        <div className={`${style.container} ${mainStyle.backgroundColor}`}>
            <div className={style.containerPost}>
                <h1>Diz-nos onde estás! <br /> E conecta-te com os teus vizinhos </h1>
                <div className={style.select}>
                    <select onChange={(e) => setSelectedCountry(e.target.value)}
                        value={selectedCountry}>
                        <option value="" disabled selected>Selecione o país</option>
                        {countries.map((country) => (
                            <option key={country.code} value={country.name}>
                                {country.name}
                            </option>
                        ))}

                    </select>
                </div>
                <div className={style.select}>
                    <select disabled={!selectedCountry || cities.length === 0} >
                        <option value="" disabled selected>Selecione a cidade</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div onClick={ProfilePhoto}><AuthButton setStatus={setBtn} status={btn} value="Postar" /></div>
                <div onClick={skip}><SkipButton setStatus={setSkip} status={Skip} value="Saltar" /></div>
            </div>
        </div>
    )
}