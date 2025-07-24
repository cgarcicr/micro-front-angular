import { Component } from '@angular/core';

interface DashboardMetric {
  title: string;
  value: string;
  change: number;
  icon: string;
  color: string;
}

interface ChartData {
  label: string;
  value: number;
  color: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mf-dashboard';
  Math = Math; // Para usar Math en el template

  // Métricas principales
  metrics: DashboardMetric[] = [
    {
      title: 'Saldo Total',
      value: '$12,450,000',
      change: 12.5,
      icon: '💰',
      color: 'primary',
    },
    {
      title: 'Transacciones',
      value: '347',
      change: -2.3,
      icon: '📊',
      color: 'secondary',
    },
    {
      title: 'Productos',
      value: '8',
      change: 0,
      icon: '🏦',
      color: 'tertiary',
    },
    {
      title: 'Ahorros',
      value: '$850,000',
      change: 8.1,
      icon: '💎',
      color: 'success',
    },
  ];

  // Datos para gráfico de barras - Transacciones por mes
  transactionData: ChartData[] = [
    { label: 'Ene', value: 85, color: '#FDDA24' },
    { label: 'Feb', value: 92, color: '#FDDA24' },
    { label: 'Mar', value: 78, color: '#FDDA24' },
    { label: 'Abr', value: 95, color: '#FDDA24' },
    { label: 'May', value: 88, color: '#FDDA24' },
    { label: 'Jun', value: 100, color: '#E6C000' },
  ];

  // Datos para gráfico de categorías de gastos
  expenseData: ChartData[] = [
    { label: 'Alimentación', value: 35, color: '#FDDA24' },
    { label: 'Transporte', value: 25, color: '#E6C000' },
    { label: 'Entretenimiento', value: 20, color: '#0066CC' },
    { label: 'Servicios', value: 15, color: '#B8950A' },
    { label: 'Otros', value: 5, color: '#6C757D' },
  ];

  // Transacciones recientes
  recentTransactions = [
    {
      description: 'Transferencia a Juan Pérez',
      amount: -250000,
      date: '2025-01-14',
      type: 'transfer',
    },
    {
      description: 'Pago servicios públicos',
      amount: -180000,
      date: '2025-01-13',
      type: 'payment',
    },
    {
      description: 'Depósito salario',
      amount: 3500000,
      date: '2025-01-12',
      type: 'deposit',
    },
    {
      description: 'Compra supermercado',
      amount: -120000,
      date: '2025-01-12',
      type: 'purchase',
    },
    {
      description: 'Transferencia recibida',
      amount: 500000,
      date: '2025-01-11',
      type: 'transfer',
    },
  ];

  getMaxValue(data: ChartData[]): number {
    return Math.max(...data.map((item) => item.value));
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(amount);
  }

  getTransactionIcon(type: string): string {
    const icons: { [key: string]: string } = {
      transfer: '↔️',
      payment: '💳',
      deposit: '⬇️',
      purchase: '🛒',
    };
    return icons[type] || '💰';
  }

  logout(): void {
    // Eliminar el token del localStorage
    localStorage.removeItem('token');

    // Redirigir a la página de login
    window.location.href = '/';
  }
}
