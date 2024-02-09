export default function SectionWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="mx-auto max-w-6xl 2xl:max-w-7xl">
			{children}
		</div>
	);
}
