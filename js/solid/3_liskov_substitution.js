// Принцип подстановки Барбары Лисков

// Функции, которые используют базовый тип, должны иметь возможность использовать
// подтипы базового типа, не зная об этом

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'link';
    leftIcon?: React.ReactNode;
}

const Button = (props: ButtonProps) => { {/* подтип - как минимум реализует функционал базового типа */}
    const { variant, leftIcon, children, ...restProps } = props;

    return (
        <button {...restProps}> {/* базовый тип */}
            {leftIcon}
            {children}
        </button>
);
}
