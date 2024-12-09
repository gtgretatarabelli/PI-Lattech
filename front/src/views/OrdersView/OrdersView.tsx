"use client"
import { useEffect, useState } from "react";
import { IUserSession } from "@/interfaces/IUserSession";
import { getOrder } from "@/helpers/orders.helpers";
import { IOrders } from "@/interfaces/IOrders";


const OrdersView = () => {
  const [orders, setOrders] = useState<IOrders[]>([]);
  const [userData, setUserData] = useState<IUserSession | null>(null);

  const fetchData = async () => {
    try {
      const response = await getOrder(userData?.token!);
      setOrders(response);
    } catch (error) {
    }
  };
  useEffect(() => {
    if (userData?.user.name) {
      fetchData();
    }
  }, [userData?.user]);


  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedUserData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(storedUserData);
    }
  }, []);

  return (
    <div className="p-4 md:p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Tus compras</h1>
      {orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.id} className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">
                Fecha: {new Date(order.date).toLocaleDateString()}
              </p>
              <p className="text-md font-medium">Estado: {order.status}</p>
              <div className="mt-2">
                {order.products.map((product) => (
                  <div key={product.id} className="border-b last:border-b-0 py-2">
                    <p className="text-lg font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-500">Precio: <span className="text-blue-600">${product.price.toFixed(2)}</span></p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-gray-700">No tienes órdenes actualmente.</p>
      )}
    </div>
  );
};

export default OrdersView;
