import React, { useState } from "react";

interface LocationDetails {
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  postalCode: string;
}

interface ReportInfo {
  reportId: number;
  name: string;
  phone: string;
  email: string;
  message: string;
  locationDetails: LocationDetails;
}

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  reportId: number;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose, reportId }) => {
  const [formData, setFormData] = useState<ReportInfo>({
    reportId,
    name: "",
    phone: "",
    email: "",
    message: "",
    locationDetails: {
      country: "",
      state: "",
      city: "",
      neighborhood: "",
      postalCode: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      locationDetails: { ...prev.locationDetails, [name]: value },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/reports/info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Informação enviada com sucesso!");
      onClose();
    } else {
      alert("Erro ao enviar informação!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-gray-50 text-black rounded-lg p-6 w-[50rem] shadow-lg ">
        <h2 className="text-2xl font-bold mb-4">Adicionar Informação</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="reportId"
            value={formData.reportId}
            onChange={handleChange}
          />
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2  border-gray-500"
            />
          </label>

          <label>
            Telefone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2 border-gray-500"
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2 border-gray-500"
            />
          </label>
          <label>
            Mensagem:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-2 border-gray-500"
              required
            />
          </label>
          <h3 className="text-lg font-bold">Detalhes da Localização</h3>
          <label>
            País:
            <input
              type="text"
              name="country"
              value={formData.locationDetails.country}
              onChange={handleLocationChange}
              className="w-full p-2 border rounded mb-2 border-gray-500"
            />
          </label>
          <label>
            Estado:
            <input
              type="text"
              name="state"
              value={formData.locationDetails.state}
              onChange={handleLocationChange}
              className="w-full p-2 border rounded mb-2 border-gray-500"
            />
          </label>
          <label>
            Cidade:
            <input
              type="text"
              name="city"
              value={formData.locationDetails.city}
              onChange={handleLocationChange}
              className="w-full p-2 border rounded mb-2 border-gray-500"
            />
          </label>
          <label>
            Bairro:
            <input
              type="text"
              name="neighborhood"
              value={formData.locationDetails.neighborhood}
              onChange={handleLocationChange}
              className="w-full p-2 border rounded mb-2 border-gray-500"
            />
          </label>
          <label>
            CEP:
            <input
              type="text"
              name="postalCode"
              value={formData.locationDetails.postalCode}
              onChange={handleLocationChange}
              className="w-full p-2 border rounded mb-2 border-gray-500"
            />
          </label>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 p-2 bg-gray-400 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="p-2 bg-blue-600 text-white rounded"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
