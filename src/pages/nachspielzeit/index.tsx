import * as React from "react"
import {GatsbyImage} from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import '../../components/global.css'
import {graphql} from "gatsby"

const afterHoursPage = ({data}) => {
    const {gatsbyImageData} = data.file.childImageSharp;
    return (
        <main className="after-hours">
            <Layout pageTitle="Nachspielzeit">
                <GatsbyImage alt="" image={gatsbyImageData} imgStyle={{objectPosition: "0 33%"}}/>
                <h2>Allgemeine Informationen, Teilnahmebedingungen</h2>
                <p>„Nachspielzeit“ ist eine privat organisierte Veranstaltungsreihe des Elternrats mit freundlicher
                    Unterstützung durch den Förderverein.</p>
                <p>Dadurch ist eine Betreuung durch das Kinderhaus ausgeschlossen und Kinder können nur an der
                    Veranstaltung teilnehmen, wenn sie in Begleitung eines {}
                    <abbr title="schließt auch andere abholberechtigte Personen ein">Elternteils</abbr> {}
                    sind und von diesem vorher abgeholt und bei den Erzieher:innen abgemeldet wurden. Im Falle, dass die
                    Eltern die Abholung nicht rechtzeitig vor Beginn der Veranstaltung realisieren können, ist es
                    möglich, einem Elternteil eines anderen teilnehmenden Kitakindes eine schriftliche Abholerlaubnis zu
                    erteilen.</p>
                <p>Während der Veranstaltung ist vom pädagogischen Kitapersonal niemand mehr anwesend und das
                    Abschließen das Hauses nach der Veranstaltung wird freundlicherweise vom Hausmeisterdienst
                    übernommen, der extra dafür jemanden länger bereitstellt. Daher ist nach Ende der Veranstaltung der
                    Aufenthalt in der Kita nicht mehr gestattet und das Gebäude ist auf direktem Wege zu verlassen,
                    damit niemand versehentlich eingeschlossen wird.</p>
                <h2>Dienstag, 2024-02-06: „Wir verzaubern das neue Jahr“</h2>
                <p>… mit Magier <a href="https://www.zauberstudio-kittlitz.de/">Peter Schulz</a> aus Kittlitz.</p>
                <ul>
                    <li>15:15 Uhr Einlass</li>
                    <li>15:30 Uhr Beginn</li>
                    <li>16:30 Uhr Kita verlassen</li>
                </ul>
                <p>Die Veranstaltung findet im Sport/Mehrzweckraum statt (Erdgeschoss, links hinter der Treppe die zur
                    Mäuschengruppe führt).</p>
                <ul>
                    <li><a href="/20240206-nachspielzeit.pdf">Plakat als PDF</a></li>
                    <li><a href="/20240206-nachspielzeit.ics">Termin als iCal</a></li>
                </ul>
            </Layout>
        </main>
    )
}
export const titlequery = graphql`
  	query titlequery {
  		file(relativePath: {eq: "magic-show.jpg"}) {
    		childImageSharp {
      			gatsbyImageData
    		}
  		}
	}
`

export const Head = () => <title>Nachspielzeit</title>
export default afterHoursPage