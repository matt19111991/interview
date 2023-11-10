// Принцип открытости и закрытости

// Классы / функции / компоненты должны быть
// открыты для расширения и закрыты для модификации

// Варианты расширения
//  - Дополнительные props
//  - Prop children
//      - Утилита Children
//      - Метод cloneElement
//      - Children.map(children, (child, index) => cloneElement(child, { prop: value }));
//  - Render props
//      - <MyComponent someProp={(data) => <h1>{data.title}</h1>} />
//  - Передача в props готовой разметки
//      - <MyComponent icon={<EmailIcon color='white' />} />
//  - Паттерн compound components (составные компоненты)

// Compound components

<InputGroup>
    <InputLeftAddon>'+234'</InputLeftAddon>
    <Input placeholder="text" type="text" value={text} />
</InputGroup>
