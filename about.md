---
layout: default
---

#### ABOUT THIS PROJECT

We tracks layoffs of journalists within media companies in Brazil. The project compiles data from publications that report on the media, by close readership of niche bulletins and from alerts we receive about specific search terms.

It is a landmark independent data project in Brazil and a national reference regarding journalists layoffs, being source to dozens of news and academic reports all over the country (find some of those [here](links.html), most are in Portuguese.)

**{{ site.jornalistas }} journalists were fired from newsrooms in Brazil since 2012.**

*Passaralhos* is a slang for layoffs of journalists, combining the Portuguese words for bird and a popular cursing expression. The origin is uncertain, but it is a term widely known within the journalism market, thus the name of the project.

The database is maintained by Brazilian journalism agency [Volt Data Lab](www.voltdata.info) and by journalist [Sérgio Spagnuolo](www.twitter.com/sergiospagnuolo), and you can find all this website's code and data in our [Github repo](https://github.com/voltdatalab/passaralhos).

You can read more about Volt [in this profile](http://bit.ly/2vsZP9p) *Nieman Lab* published about the agency.

###### Chart: Number journalists fired from newsrooms in Brazil, per year

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="js/d3.js"></script>
<script src="js/d3plus.js"></script>
<div id="chart"> </div>
<script src="graficos/barras_ano.js"></script>

#### CONTEXT

It is not an easy job to track journalists layoffs in Brazilian newsrooms. There is no national database about it. The national federation of Brazilian journalists, Fenaj, and local unions do not keep any sort of record specifically about newsrooms. For their own reasons, media companies usually are not transparent about the journalists they let go.

Official job data is sketchy for this field. First, because in Brazil anyone who goes to journalism college can be called a *journalist*, even if the person works as a communications officer, a public relations professional, a civil servant, a dentist or a baker. If you have a diploma in journalism here, you can officially be called a journalist, even if you never set foot in a newsroom.

Because of that, if you have a journalism major and gets fired from your job, say, in a PR firm, you may be counted in official stats as a journalist. Also, because of outsourcing, many people who work as journalists are not registered as such, and many go as *communications analyst* or other unrelated denomination, usually to avoid unions and costs issues.

So you can see how official data can be unrepresentative of actual journalists layoffs from newsrooms.

There is also the question of job informality. If you are a journalist properly hired by a newsroom (*we call this CLT regime*), you get all the benefits [guaranteed by law]((http://bit.ly/2vxVtxW)), such as paid vacation, maternity leave, 13th salary (kind of a Christmas bonus), among others rights. This, plus hefty taxes, make hiring very expensive in Brazil.

A 2013 [study](http://bit.ly/2JaiNU6) (*Portuguese only*) by USFC university with 2.713 journalists from all over Brazil showed that, while 75% of them had professional registry, only some 50% of those worked within newsrooms -- this proportion is probably slightly smaller right now, after many layoffs in the country.

The research concluded that 25% of newsroom jobs were not under the CLT regime, meaning that they were not proper employees, instead working as *fixed freelancers* or something we call here *juridical person*, or just PJ -- a system in which a worker has his/her own company and is paid as a services provider, when, in fact, it is a regular day-to-day job, except there are no mandatory benefits or taxes to be paid by the employer, although salaries may be somewhat higher.

Until the CLT law was updated in late 2017, this was borderline illegal, but widely used in several industries. As mentioned above, there is also another regime, in which a journalism company gets an outsourcing contractor to hire them journalists, if only as outside, non-staff help, which can also blur the proper data.

(*Editor's note: I have reservations about the CLT figure of 25%. When you are an informal worker, some attributions you have may not include working full time within a newsroom (thus not warranting them to be called staff), but nevertheless if you are a regular contributor of certain newsroom, you might as well be their employee. Some informal estimates put the number up to 40%, but this number is not clear anywhere.*)

All this shows how hard it is to find precise data about layoffs specifically in newsrooms, which has the power to shed a light over the hardships the industry has been facing in Brazil.

Volt Data Lab has reached out to practically all the unions in country in 2015, but only got feedback from four of them, and only one provided us with actual data. Fenaj sent us a copy of official government data that didn't set newsrooms apart from the whole "journalist" bucket, thus making their feedback unusable.

#### THE DATA

Because of the mentioned issues, Volt Data Lab's research is based entirely in news published about layoffs. Fortunately, Brazil has some news outlets that widely cover the media. Our main sources are [Portal Imprensa](http://portalimprensa.com.br/), [Comunique-se](http://comunique-se.com.br/) and [Portal dos Jornalistas/Jornalistas&Cia](http://portaldosjornalistas.com.br/), but may also include other news sites as well.

We make quarterly reviews of content published by several outlets that contains certain search terms that fits the description of layoffs within newsrooms. Then we compile the data into our database and [API](https://raw.githubusercontent.com/voltdatalab/passaralhos/gh-pages/_data/jornalistas.json), which feeds this website.

This methodology does not provide clear-cut figures, since not every single layoff gets reported by the dot (especially single cases and those away from major cities like São Paulo, Rio de Janeiro, Brasilia and Curitiba). But, since it makes no discrimination between informal and formal workers, and since we can compile data regarding only newsrooms, it gives a gauge to measure what is going on in the media as a whole, serving as a thermometer of the situation.

For instance, 2015 was an abysmal year for journalists overall, following the beginning of an economic recession and the decrease of ads revenue to major social media platforms. Our data gave us a good sense of how this happened and which companies and segments were more affected.

Some disadvantage of this model. Before 2012, reports on layoffs are sparse and imprecise in search mechanisms, making it difficult to have a comprehensive time series of events before that.

Our data also do not consider people coming into newsrooms. It is an impossible number to track for now, as media companies don't go about boasting every single journalist they hire, especially after laying off dozens of professionals. And this is a known event all over the world in several industries: more experienced (and expensive) professionals are let go to make room for newer, cheaper labour. However, we do not consider new hirings make up to the amount of people fired from newsrooms.

Our data is openly available for all, and we expected it to be used as a way to understand changes in the journalism business and culture, rather than providing a definitive figure.

###### *by Sergio Spagnuolo - April 19, 2018*
###### *e-mail: [info[@]voltdata.info](mailto: info@voltdata.info)*
