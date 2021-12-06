const storys = [
	{
		nome: "9gag",
		imagem:"/img/9gag-1.png"
	},
	{
		nome: "meowed",
		imagem:"/img/meowed.png"
	},
	{
		nome: 'barked',
		imagem: "/img/barked.png"
	},
	{
		nome: "nathan...",
		imagem: "/img/nathanwpylestrangeplanet.png"
	},
	{
		nome: "wawaw...",
		imagem:"/img/wawawiwacomicsa.png"
	},
	{
		nome: "respondeai",
		imagem:"/img/respondeai.png"
	},
	{
		nome:"filomoderna",
		imagem:"/img/filomoderna.png"
	},
	{
		nome:"memeriago",
		imagem:"/img/memeriagourmet.png"
	}
]


export default function Storys() {
	return (
		<div class="storys">

			{storys.map((s) => (
				<div class="story">
					<div class="logo">
						<img src={s.imagem} />
					</div>
					<p>{s.nome}</p>
				</div>
			))}

			<div class="passador mobile">
				<ion-icon class="arrow" name="chevron-forward-circle"></ion-icon>
			</div>

		</div>
	);
}
