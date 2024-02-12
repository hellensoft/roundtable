import SectionWrapper from "./SectionWrapper";

const SectionHeader = ({
	title,
	description,
}: {
	title: string;
	description?: string;
}) => {
	return (
		<SectionWrapper>
			<div className="py-6 space-y-3">
				{description && (
					<p className="text-gray">
						<span className="text-blueLight font-bold text-lg mr-2">
							_____
						</span>
						{description}
					</p>
				)}
				<h1 className="text-blueDark text-3xl font-semibold">
					{title}
				</h1>
			</div>
		</SectionWrapper>
	);
};

export default SectionHeader;
