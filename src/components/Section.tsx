type SectionProps = {
    className?: string;
    id?: string;
    customPaddings?: string;
    children?: React.ReactNode;
};

const Section = ({
    className = '',
    id,
    children,
    customPaddings,
}: SectionProps) => {
    return (
        <section
            id={id}
            className={`relative ${
                customPaddings || 'pb-[3.125rem] lg:pb-[3.75rem]'
            } ${className}`}
        >
            {children}
        </section>
    );
};

export default Section;
