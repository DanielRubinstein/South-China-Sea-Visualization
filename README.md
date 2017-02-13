# South-China-Sea-Visualization

Manipulation et visualization de données d'ICEWS (World-Wide Integrated Crisis Early Warning System).

(Requête SQL faite directement par Michael Ward, co-créateur d'ICEWS.)

Données complètes: south-china-sea.csv

Visualization des données complètes: https://danielrubinstein.github.io/South-China-Sea-Visualization/

>Fichier CSV:
>
>headers:
> src_ccode    source country COW code (China, HK, Macao together)
> src_name             source country name (China, HK, Macao seperate)
> tgt_ccode    target country COW code (China, HK, Macao together)
> tgt_name             target country name (China, HK, Macao seperate)
> date                         year-month
> verbal               1=verbal,      0=material
> cooperation  1=cooperation, 0=conflict
> count         number of events in directed-dyad-month-quad tuple
> evt_ccode     COW code for country in which event occured
>


Description de ICEWS:
"International Crisis Early Warning System, the ICEWS project, which the U.S. government
established to analyze political instability around the world and provide relevant policy advice.
Funded by the Defense Advanced Research Projects Agency and the Office of Naval
Research, ICEWS created near-real-time global event data covering over 175 countries and
news sources from roughly 300 different news outlets (Boschee, Lautenschlager, O’Brien,
Shellman, Starz and Ward 2015).3 To code events, ICEWS utilizes the Penn State Event
Data Project’s TABARI (Text Analysis By Augmented Replacement Instruction) software
and a commercially developed java variant (JABARI), which parse and stem corpus to facilitate
machine identification of political relevant parameters based on the Conflict and
Mediation Event Observation (CAMEO) codebook (Schrodt 2009, 2012; Boschee, Natarajan
and Weischedel 2013)."
