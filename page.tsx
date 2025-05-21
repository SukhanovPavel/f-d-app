// 'use client'
//
// import {Database} from "@/lib/schema";
// import {useState} from "react";
// import {Session, useSupabaseClient} from '@supabase/auth-helpers-react'
//
// import {supabase} from "@/lib/initSupabase";
//
// import {Button} from "@/components/ui/button"
// import {Input} from "@/components/ui/input"
// import {Label} from "@/components/ui/label"
// import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
//
//
// type Voter = Database['public']['Tables']['todos']['Row']
//
//
// export default function Home({session}: { session: Session }) {
//
//     const [voter, setVoter] = useState<Voter>({
//         lastName: '',
//         firstName: '',
//         patronymic: '',
//         date: Date | '',
//         region: '',
//         phone: '',
//     })
//
//     const addRow = async (e) => {
//         e.preventDefault
//         const response = await fetch('/api/addRow', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({...voter}),
//         });
//
//         const data = await response.json();
//         console.log(data);
//     };
//
//     const success = true
//
//     // const addVoter = async (voter) => {
//     //   const { data, error } = await supabase
//     //       .from('voters')
//     //       .insert([
//     //         {
//     //           lastName: voter.lastName,
//     //           firstName: voter.firstName,
//     //           patronymic: voter.firstName,
//     //           date: voter.date,
//     //           region: voter.region,
//     //           phone: voter.phone,
//     //         },
//     //       ])
//     //       .select();
//     //
//     //   if (error) {
//     //     console.error('Ошибка при добавлении избирателя:', error);
//     //   } else {
//     //     console.log('Избиратель успешно добавлен:', data);
//     //     // Здесь можно добавить логику для обработки успешного добавления, например, очистить форму или показать уведомление
//     //   }
//     // };
//
//
//     // const addVoter = async (voter) => {
//     //
//     //
//     //   const { data, error } = await supabase
//     //       .from('voters')
//     //       .insert([
//     //         {
//     //           lastName: voter.lastName,
//     //           firstName: voter.firstName,
//     //           patronymic: voter.firstName,
//     //           date: voter.date,
//     //           region: voter.region,
//     //         },
//     //       ])
//     //       .select()
//
//
//     // if (voter.values !== '') {
//     //   const { data: {voter}, error } = await supabase
//     //       .from('voters')
//     //       .insert({ ...voter })
//     //       .select()
//     //       .single()
//     //
//     //   if (error) {
//     //     setErrorText(error.message)
//     //   } else {
//     //     setVoter(voter.values.map(i => i = ''))
//     //   }
//     // }
//     // }
//
//     return (
//         <main className="min-h-screen bg-blue-600 p-4 md:p-8 flex flex-col">
//             <div className="max-w-md mx-auto flex-grow">
//                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-300 text-center mb-2">
//                     Действуй с командой ЛДПР!
//                 </h1>
//                 <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-300 text-center mb-8">
//                     Халезин Сергей Николаевич
//                 </h2>
//
//                 <Card className="bg-blue-700">
//                     <CardHeader>
//                         <CardTitle className="text-yellow-300 text-xl md:text-2xl text-center">Поддержать
//                             кандидата</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <div className="space-y-4">
//                             <div className="space-y-2">
//                                 <Label htmlFor="lastName" className="text-yellow-300">
//                                     Фамилия
//                                 </Label>
//                                 <Input
//                                     value={voter.lastName}
//                                     onChange={(e) => setVoter(prevVoter => ({...prevVoter, lastName: e.target.value}))}
//                                     id="lastName"
//                                     className="bg-blue-600 text-yellow-300 border-yellow-300 py-6 text-lg"
//                                 />
//                             </div>
//                             <div className="space-y-2">
//                                 <Label htmlFor="firstName" className="text-yellow-300">
//                                     Имя
//                                 </Label>
//                                 <Input
//                                     value={voter.firstName}
//                                     onChange={(e) => setVoter(prevVoter => ({...prevVoter, firstName: e.target.value}))}
//                                     id="firstName"
//                                     className="bg-blue-600 text-yellow-300 border-yellow-300 py-6 text-lg"
//                                 />
//                             </div>
//                             <div className="space-y-2">
//                                 <Label htmlFor="patronymic" className="text-yellow-300">
//                                     Отчество
//                                 </Label>
//                                 <Input
//                                     value={voter.patronymic}
//                                     onChange={(e) => setVoter(prevVoter => ({
//                                         ...prevVoter,
//                                         patronymic: e.target.value
//                                     }))}
//                                     id="patronymic"
//                                     className="bg-blue-600 text-yellow-300 border-yellow-300 py-6 text-lg"
//                                 />
//                             </div>
//                             <div className="space-y-2">
//                                 <Label htmlFor="date" className="text-yellow-300">
//                                     Дата рождения
//                                 </Label>
//                                 <Input
//                                     type={"date"}
//                                     value={voter.date || ''}
//                                     onChange={(e) => setVoter(prevVoter => ({...prevVoter, date: e.target.value}))}
//                                     id="date"
//                                     className="bg-blue-600 text-yellow-300 border-yellow-300 py-6 text-lg"
//                                 />
//                                 {/*<Popover>*/}
//                                 {/*  <PopoverTrigger asChild value={voter.data}>*/}
//                                 {/*    <Button*/}
//                                 {/*      variant={"outline"}*/}
//                                 {/*      className="w-full justify-start text-left font-normal bg-blue-600 text-yellow-300 border-yellow-300 py-6"*/}
//                                 {/*    >*/}
//                                 {/*      <CalendarIcon className="mr-2 h-5 w-5" />*/}
//                                 {/*      <span className="text-lg">Выберите дату</span>*/}
//                                 {/*    </Button>*/}
//                                 {/*  </PopoverTrigger>*/}
//                                 {/*  <PopoverContent className="w-auto p-0">*/}
//                                 {/*    <Calendar*/}
//                                 {/*        mode="single"*/}
//                                 {/*        selected={new Date()}*/}
//                                 {/*        onSelect={(e) => setVoter(voter.data = e.target.value)}*/}
//                                 {/*        initialFocus*/}
//                                 {/*    />*/}
//                                 {/*  </PopoverContent>*/}
//                                 {/*</Popover>*/}
//                             </div>
//                             <div className="space-y-2">
//                                 <Label htmlFor="region" className="text-yellow-300">
//                                     Регион
//                                 </Label>
//                                 <Input
//                                     value={voter.region}
//                                     onChange={(e) => setVoter(prevVoter => ({...prevVoter, region: e.target.value}))}
//                                     id="region"
//                                     className="bg-blue-600 text-yellow-300 border-yellow-300 py-6 text-lg"
//                                 />
//                             </div>
//                             <div className="space-y-2">
//                                 <Label htmlFor="phone" className="text-yellow-300">
//                                     Телефон
//                                 </Label>
//                                 <Input
//                                     value={voter.phone}
//                                     onChange={(e) => setVoter(prevVoter => ({...prevVoter, phone: e.target.value}))}
//                                     type={"number"}
//                                     required
//                                     id="phone"
//                                     className="bg-blue-600 text-yellow-300 border-yellow-300 py-6 text-lg"
//                                 />
//                             </div>
//                             {success ? <p className="text-green-500 text-m">Форма успешно отправлена!</p> : ""}
//                             <Button
//                                 // type="submit"
//                                 onClick={addRow}
//                                 className="w-full bg-yellow-300 text-blue-700 hover:bg-yellow-400 text-xl font-semibold py-6"
//                             >
//                                 Подать данные
//                             </Button>
//                         </div>
//                     </CardContent>
//                 </Card>
//             </div>
//             <footer className="mt-8 text-yellow-300 text-xs text-center max-w-md mx-auto">
//                 <p>
//                     Нажимая кнопку «Вступить в партию ЛДПР» (Согласно Федеральному закону от 27.07.2006 года № 152-ФЗ «О
//                     персональных данных»), даю согласие на обработку, а именно совершение действий, предусмотренных
//                     п.3,4 ч.1 ст.
//                     3 Федерального закона «О персональных данных», в том числе с использованием средств автоматизации,
//                     моих
//                     персональных данных любыми не запрещенными законодательством Российской Федерации способами, в
//                     целях,
//                     определенных уставом юридического лица.
//                 </p>
//             </footer>
//         </main>
//     )
// }

'use client';

import {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function DataForm() {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
        birthDate: '',
        city: '',
        street: '',
        phone: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({text: '', isError: false});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({text: '', isError: false});

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage({text: result.message, isError: false});
                // Очистка формы после успешной отправки
                setFormData({
                    lastName: '',
                    firstName: '',
                    middleName: '',
                    birthDate: '',
                    city: '',
                    street: '',
                    phone: ''
                });
            } else {
                setMessage({text: result.error, isError: true});
            }
        } catch (error) {
            setMessage({text: 'Ошибка сети при отправке данных', isError: true});
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-blue-600 p-4 md:p-8 flex flex-col">

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2">
                Действуй с командой ЛДПР Шатура!
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white text-center mb-8">
                Халезин Сергей Николаевич
            </h2>
            <Card className="bg-blue-700">
                <CardHeader>
                    {/*<h2 className="text-white text-xl md:text-2xl text-center">*/}
                    <CardTitle className="text-white text-xl md:text-xl text-center">
                        Поддержать кандидата
                    </CardTitle>
                    {/*</h2>*/}
                </CardHeader>

                <CardContent>
                    <form
                        onSubmit={handleSubmit}
                        // className="space-y-4 max-w-md mx-auto bg-blue-600 p-4 md:p-8"
                        className="max-w-md mx-auto flex-grow"
                    >
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-yellow-300 mb-1">
                                    Фамилия*
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="bg-white text-black border-my_color py-6 text-lg flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    // className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-yellow-300 mb-1">
                                    Имя*
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="bg-white text-black border-my_color py-6 text-lg flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    // className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-yellow-300 mb-1">
                                    Отчество
                                </label>
                                <input
                                    type="text"
                                    name="middleName"
                                    value={formData.middleName}
                                    onChange={handleChange}
                                    className="bg-white text-black border-my_color py-6 text-lg flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    // className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-yellow-300 mb-1">
                                    Дата рождения*
                                </label>
                                <input
                                    type="date"
                                    name="birthDate"
                                    value={formData.birthDate}
                                    onChange={handleChange}
                                    required
                                    className="bg-white text-black border-my_color py-6 text-lg flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    // className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-yellow-300 mb-1">
                                    Город
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="bg-white text-black border-my_color py-6 text-lg flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    // className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-yellow-300 mb-1">
                                    Улица и дом
                                </label>
                                <input
                                    type="text"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleChange}
                                    className="bg-white text-black border-my_color py-6 text-lg flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    // className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-yellow-300 mb-1">
                                    Телефон*
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="bg-white text-black border-my_color py-6 text-lg flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    // className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    // placeholder="+79161234567"
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-yellow-300 text-blue-700 hover:bg-yellow-400 text-lg font-semibold py-3 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {isSubmitting ? 'Отправка...' : 'Подать данные'}
                            </button>
                        </div>

                        {message.text && (
                            <div
                                className={`p-3 rounded-md ${message.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                {message.text}
                                <p onClick={() => setMessage({...message, text: ""})}>x</p>
                            </div>
                        )}

                        {/*<div className="text-xs text-yellow-400 text-center pt-2">*/}
                        {/*    <p>Нажимая кнопку «Подать данные» (Согласно Федеральному закону от 27.07.2006 года № 152-ФЗ «О персональных данных»), даю согласие на обработку, а именно совершение действий, предусмотренных п.3,4 ч.1 ст. 3 Федерального закона «О персональных данных», в том числе с использованием средств автоматизации, моих персональных данных любыми не запрещенными законодательством Российской Федерации способами, в целях, определенных уставом юридического лица.</p>*/}
                        {/*</div>*/}


                    </form>
                </CardContent>
            </Card>
            <footer className="mt-8 text-white text-xs text-center max-w-md mx-auto">
                <p>
                    Нажимая кнопку «Подать данные» (Согласно Федеральному закону от 27.07.2006 года № 152-ФЗ «О персональных
                    данных»), даю согласие на обработку, а именно совершение действий, предусмотренных п.3,4 ч.1 ст. 3
                    Федерального закона «О персональных данных», в том числе с использованием средств автоматизации, моих
                    персональных данных любыми не запрещенными законодательством Российской Федерации способами, в целях,
                    определенных уставом юридического лица.
                </p>
            </footer>
        </main>
    );
}