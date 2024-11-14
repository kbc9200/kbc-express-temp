import React, {useState} from 'react';
import './EditableTable.css';

const EditableTable = () => {
    const initialData = [
        {id: 1, name: "John Doeㅁㄴㅇㅁㄴㅇ ㅁㄴㅇ ㅁㄴㅇ ㅁㄴㅇ ㅁㄴㅇㄹ ㅁㄴㅇㄹ ㅁㄴㅇㄹ ㅁㄴㅇㄹ ㅁㄴㅇㄹ ㅁㄴㅇㄹ ㅁㄴㅇㄹ ㅁㄴㅇㄹ ", age: 28, job: "Engineer", isEdited: false},
        {id: 2, name: "Jane Smith", age: 32, job: "Designer", isEdited: false},
        {id: 3, name: "Mark Wilson", age: 40, job: "Manager", isEdited: false},
    ];

    const [data, setData] = useState(initialData);
    const [columnWidths, setColumnWidths] = useState([200, 100, 200]);

    const handleEditCell = (id, field, value) => {
        const updatedData = data.map((row) =>
            row.id === id
                ? {...row, [field]: value, isEdited: true} // 변경된 행의 `isEdited`를 true로 설정
                : row
        );
        setData(updatedData);
    };

    const handleMouseDown = (index) => (e) => {
        e.preventDefault();

        const startX = e.clientX;
        const startWidth = columnWidths[index];

        const handleMouseMove = (e) => {
            const newWidth = startWidth + (e.clientX - startX);
            setColumnWidths((prevWidths) => {
                const newWidths = [...prevWidths];
                newWidths[index] = Math.max(newWidth, 50);
                return newWidths;
            });
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <div className="table-container"> {/* 스크롤 가능하도록 div 추가 */}
            <table className="editable-table">
                <thead>
                <tr>
                    {['Name', 'Age', 'Job'].map((header, index) => (
                        <th key={index} style={{width: columnWidths[index]}}>
                            {header}
                            <div
                                className="resize-handle"
                                onMouseDown={handleMouseDown(index)}
                            />
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr key={row.id} className={row.isEdited ? 'edited-row' : ''}>
                        <EditableCell
                            value={row.name}
                            width={columnWidths[0]}
                            onChange={(value) => handleEditCell(row.id, "name", value)}
                        />
                        <EditableCell
                            value={row.age}
                            width={columnWidths[1]}
                            onChange={(value) => handleEditCell(row.id, "age", value)}
                        />
                        <EditableCell
                            value={row.job}
                            width={columnWidths[2]}
                            onChange={(value) => handleEditCell(row.id, "job", value)}
                        />
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

const EditableCell = ({value, onChange, width}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
        onChange(inputValue);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setIsEditing(false);
            onChange(inputValue);
        }
    };

    return (
        <td style={{width}} onDoubleClick={handleDoubleClick}>
            {isEditing ? (
                <input
                    className="table-cell-input"
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            ) : (
                <span>{value}</span>
            )}
        </td>
    );
};

export default EditableTable;
