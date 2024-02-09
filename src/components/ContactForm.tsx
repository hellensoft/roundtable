"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	subject: yup.string().required(),
	message: yup.string().required(),
});

type ContactData = yup.InferType<typeof schema>;

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: ContactData) => {
		console.log(data);
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid gap-6 max-w-3xl mx-auto"
			>
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						{...register("name")}
						className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					/>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						{...register("email")}
						className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					/>
				</div>
				<div>
					<label
						htmlFor="subject"
						className="block text-sm font-medium text-gray-700"
					>
						Subject
					</label>
					<input
						type="text"
						id="subject"
						{...register("subject")}
						className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					/>
				</div>
				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-gray-700"
					>
						Message
					</label>
					<textarea
						id="message"
						{...register("message")}
						className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					></textarea>
				</div>
				<div>
					<button
						type="submit"
						className="w-full py-3 bg-blueLight text-white rounded-md"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
