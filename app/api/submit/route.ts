import { S3 } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: any) {
    const s3 = new S3({
        endpoint: 'https://storage.yandexcloud.net',
        region: 'ru-central1',
        credentials: {
            accessKeyId: process.env.YANDEX_ACCESS_KEY || '',
            secretAccessKey: process.env.YANDEX_SECRET_KEY || '',
        },
    });

    try {
        const data = await request.json();

        // Валидация обязательных полей
        if (!data.lastName || !data.firstName || !data.birthDate || !data.phone) {
            return new Response(JSON.stringify({
                error: 'Обязательные поля: фамилия, имя, дата рождения, телефон'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const record = {
            id: uuidv4(),
            lastName: data.lastName,
            firstName: data.firstName,
            middleName: data.middleName || '',
            birthDate: data.birthDate,
            city: data.city || '',
            street: data.street || '',
            phone: data.phone,
            createdAt: new Date().toISOString()
        };

        await s3.putObject({
            Bucket: process.env.YANDEX_BUCKET_NAME,
            Key: `data/${record.id}.json`,
            Body: JSON.stringify(record),
            ContentType: 'application/json'
        });

        return new Response(JSON.stringify({
            success: true,
            message: 'Данные успешно сохранены'
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Ошибка сохранения данных:', error);
        return new Response(JSON.stringify({
            error: 'Ошибка сервера при сохранении данных'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}