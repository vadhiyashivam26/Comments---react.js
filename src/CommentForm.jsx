
import { useFormik } from "formik"

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Username cannot be empty!';
    }

    if (!values.remarks) {
        errors.remarks = 'Remarks cannot be empty!';
    }

    if (!values.rating) {
        errors.rating = 'Rating cannot be empty!';
    }

    return errors;
};

export default function CommentForm({ addNewComment }) {
    // let [formData, setFormData] = useState({
    //     username : "",
    //     remarks : "",
    //     rating : 5,
    // })

    const formik = useFormik({
        initialValues: {
            username: "",
            remarks: "",
            rating: "",
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value };
    //     });
    // };

    // let handleSubmit = (evt) => {
    //     console.log(formData);
    //     addNewComment(formData);
    //     evt.preventDefault();
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: "",
    //     });
    // };

    return (
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>&nbsp;&nbsp;&nbsp;
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={formik.values.username}
                    onSubmit={formik.handleChange}
                />
                {formik.errors.username ? <p style={{color: "red"}}>{formik.errors.username}</p> : null}
                <br />
                <br />
                <label htmlFor="remarks">Remarks</label>&nbsp;&nbsp;&nbsp;
                <textarea
                    name="remarks"
                    id="remarks"
                    placeholder="Remarks"
                    value={formik.values.remarks}
                    onSubmit={formik.handleChange}
                ></textarea>
                {formik.errors.remarks ? <p style={{color: "red"}}>{formik.errors.remarks}</p> : null}
                <br />
                <br />
                <label htmlFor="rating">Rating</label>&nbsp;&nbsp;&nbsp;
                <input
                    type="number"
                    id="rating"
                    placeholder="give rating..."
                    name="rating"
                    min={1}
                    max={5}
                    value={formik.values.rating}
                    onSubmit={formik.handleChange}
                />
                {formik.errors.rating ? <p style={{color: "red"}}>{formik.errors.rating}</p> : null}
                <br />
                <br />
                <button type="submit">Add comment</button>
            </form>
        </div>
    );
}
