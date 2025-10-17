import clsx from 'clsx';

import Image from 'next/image';

type QuoteProps = {
	author?: string;
	quote: string;
	color?: 'primary' | 'white';
};

const OcQuote = ({
	quote,
	color = 'primary',
	author = 'Oscar Carballido',
}: QuoteProps) => {
	const typeStyles = clsx({
		'text-primary-300': color === 'primary',
		'text-white/90': color === 'white',
	});

	const quoteSignStyles = clsx({
		'bg-primary-10': color === 'primary',
		'bg-white/20': color === 'white',
	});

	return (
		<div className="flex flex-col max-w-[500px] gap-2 py-4">
			<div
				className={`p-2 rounded-full w-fit shrink-0 ${quoteSignStyles}`}
			>
				<Image
					src={`/static/icons/quote_begin-${color}.svg`}
					alt="Quote begin"
					width={24}
					height={24}
					style={{ width: 'auto', height: 'auto' }}
				/>
			</div>
			<p
				className={`font-normal text-sm/6 text-primary-200 ${typeStyles}`}
			>
				{quote}
			</p>
			<div
				className={`py-1 px-2 rounded-full w-fit shrink-0 self-end flex justify-center ${quoteSignStyles}`}
			>
				<p
					className={`font-medium text-sm text-primary-200 mr-2 ml-1 ${typeStyles}`}
				>
					{author}
				</p>
				<Image
					src={`/static/icons/quote_end-${color}.svg`}
					alt="Quote end"
					width={16}
					height={16}
					style={{ width: 'auto', height: 'auto' }}
				/>
			</div>
		</div>
	);
};

export default OcQuote;
